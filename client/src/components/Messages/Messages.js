import React from 'react';
import ScrollButtom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';

const Messages = ({messages, name}) => (
     <ScrollButtom className="messages">
          {
               messages.map((message, i) => 
               <div key={i}> <Message message={message} name={name} />
               </div>
               )
          }
     </ScrollButtom>
)

export default Messages;