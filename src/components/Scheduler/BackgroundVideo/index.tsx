
import './index.scss';
import { BGMovingSticksVideo } from "../../../assets";


export const BackgroundVideo = () => {
    return (
        <div className='scheduler-bg-video-wrapper'>
            <video loop autoPlay muted> 
                <source src={BGMovingSticksVideo || ''} type='video/mp4'/>
            </video>
        </div>
    );
}