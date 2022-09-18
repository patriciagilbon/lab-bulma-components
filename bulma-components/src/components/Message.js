function Message (){
  return (
    <article class="message">
  <div class="message-header">
    <p>Hello!</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
   Please make sure to input your name and email <strong>Don't leave any empty fields!</strong>, thank you!
  </div>
</article>
  )
}

export default Message;