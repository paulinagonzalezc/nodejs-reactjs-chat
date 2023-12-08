import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';
import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    'cc8447da-9600-4be0-a7ad-0f683a11697a',
    props.user.username,
    props.user.secret,
  );
  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height: '100vh'}} />
    </div>
  );
};

export default ChatsPage;
