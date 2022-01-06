// Styles
import messages from "./Messages.module.scss";

export const Messages = ({ message }: { message: string }) => {
  return (
    <div className={messages.container_messages}>
      <div className={messages.image_message}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Fbanners%2Fshopping_cart-removebg-preview.png?alt=media&token=a99588c0-e777-46a2-bbbc-289384136202"
          alt="Shopping Cart"
        />
      </div>

      <span className={messages.message}>{message}</span>
    </div>
  );
};
