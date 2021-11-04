import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonText,
  IonItem,
  IonButton 
} from '@ionic/react';

import ReactAudioPlayer from 'react-audio-player';

import './Home.css';

const Home: React.FC = () => {
  let bellPlayer: ReactAudioPlayer | null;
  let musicPlayer: ReactAudioPlayer | null;

  return (
    <IonPage>
      {/* Header Page */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notification App</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Main Page */}
      <IonContent fullscreen>

        {/* Bell Ringing */}
        <IonItem>
          <IonText>
            <h4>Bell Ringing</h4>
          </IonText>
        </IonItem>
        <IonItem>
          <IonButton color="warning" onClick={() => {
              musicPlayer?.audioEl.current?.pause()
              bellPlayer?.audioEl.current?.play()
            }
          }>
            Ring a bell
          </IonButton>

          <ReactAudioPlayer
            ref={(element) => { bellPlayer = element; }}
            src="./assets/music/bell_ringing.mp3"
          />
        </IonItem>
        
        {/* Music */}
        <IonItem>
          <IonText>
            <h4>Music Player</h4>
          </IonText>
        </IonItem>
        <IonItem>
          <IonButton color="warning" onClick={() => {
              bellPlayer?.audioEl.current?.pause();
              musicPlayer?.audioEl.current?.play(); 
            } 
          }>
            Play
          </IonButton>
          <IonButton color="danger" onClick={() => musicPlayer?.audioEl.current?.pause()}>Pause</IonButton>

          <ReactAudioPlayer
            ref={(element) => { musicPlayer = element; }}
            src="./assets/music/Hen_Em_Kiep_Sau_Huong_Tu.mp3"
            loop
          />
        </IonItem>

        {/* Vibrate */}
        <IonItem>
          <IonText>
            <h4>Vibrator</h4>
          </IonText>
        </IonItem>
        <IonItem>
          <IonButton color="success" onClick={() => navigator.vibrate(2000)}>Vibrate</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
