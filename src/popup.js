console.log("Subscribe to Virej!");
console.log(
  "https://www.youtube.com/channel/UCRzS48bskynAxoI38BFypfQ?sub_confirmation=1"
);
document.addEventListener('keyUp', function(event) {
  if (event.getModifier('CapsLock')) {
    console.log('shit caps lock...no passwords')
  } else {
    console.log('normal no caps lock')
  }
});