document.addEventListener('DOMContentLoaded', () => {
   const $msg = document.querySelector('#msg');

   if($msg) {
      setTimeout(() => {
         $msg.remove()
      }, 3000)
   }
})