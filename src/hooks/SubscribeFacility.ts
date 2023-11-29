import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateFacility } from '../graphql/subscriptions';
import { OnUpdateFacilitySubscription } from '../API';
import { AppErrorInterface } from '../components/common';

type ApiResponse = {
  value: {
    data: OnUpdateFacilitySubscription;
  };
};

type Facility = OnUpdateFacilitySubscription['onUpdateFacility'];

const useSubscribeFacility = (): {
  facility: Facility;
  error: AppErrorInterface;
} => {
  const [facility, setFacility] = useState<Facility>();
  const [error, setError] = useState<AppErrorInterface>({
    isError: false,
    message: '',
  });
  useEffect(() => {
    let cleanedUp = false;
    let unsubscribe = () => {
      cleanedUp = true;
    };
    const subscribe = async () => {
      try {
        const client = API.graphql(graphqlOperation(onUpdateFacility));
        if ('subscribe' in client) {
          if (!cleanedUp) {
            const sub = client.subscribe({
              next: (result: ApiResponse) => {
                console.log('Facility updated:', result.value.data.onUpdateFacility);//ブラウザコンソールにDBの情報を標準出力
                                
                // サーバーサイドAPIにデータを送信
                fetch('http://localhost:3001/api/update-facility', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(result.value.data.onUpdateFacility),
                })
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    console.log('Request sent successfully');
                  })
                  .catch(error => {
                    console.error('Error sending request:', error);
                  });

                setFacility(result.value.data.onUpdateFacility);
              },
              error: (e) => {
                // something wrong..
                console.log(e);
              },
            });
            unsubscribe = () => {
              sub.unsubscribe();
              cleanedUp = true;
            };
          }
        }
      } catch {
        setError({
          isError: true,
          message: '施設情報の購読に失敗しました',
        });
      }
    };
    subscribe();
    return unsubscribe;
  }, []);

  return { facility, error };
};
export default useSubscribeFacility;
