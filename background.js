// event to run execute.js content when extension's button is clicked
chrome.action.onClicked.addListener(execScript);

async function execScript() {
  const tabId = await getTabId();
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    files: ['src/execute.js']
  })
}

async function getTabId() {
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});
  return (tabs.length > 0) ? tabs[0].id : null;
}

var executeCapLockClosure = function() {
  console.log('CAPS LOCK YO');
};

var executeCapLockNoClosure = function() {
  console.log('CAPS LOCK NO');
};


// document.addEventListener('keyup', function(event){
//   event.getModifierState('CapsLock') ? executeCapLockClosure() : executeCapLockNoClosure();
// });