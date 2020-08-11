document.addEventListener('DOMContentLoaded', () => {
   const $msg = document.querySelector('#msg');
   const $msgs = document.querySelectorAll('.msgs');

   if ($msg) {
      setTimeout(() => {
         $msg.remove();
      }, 3000);
   }

   if ($msgs) {
      setTimeout(() => {
         $msgs.forEach((msg) => {
            msg.remove();
         });
      }, 5000);
   }
});
