
const blacklist = ['/explore', '/reels']

const walkUpwards = (element, callback) => {

  // call callback on element,
  // then call on parents until parent undefined
  while(element) {
    let r = callback(element);
    if(r) return r;
    element = element.parentElement;
  }
};

const isBlackListed = (element) => {

  // blacklisted if href contains one of the strings in blacklisted array
  for(str of blacklist) {
    if(element.href.includes(str)) return true;
  }
  return false;
}

const findFooterDiv = () => {

  // visited elements
  const tree = new Set();

  // not found yet
  let r = undefined;

  // get all the links
  for(let element of document.getElementsByTagName('a')) {

    // ignore if not reels or explore tab
    if(!isBlackListed(element)) continue;

    // add parents until we reach something that has already been added
    // this must be the footer (first common ancestor of blacklisted buttons)
    r = walkUpwards(element, (element) => {
      if(tree.has(element)) return element;
      tree.add(element);
    });

    // should always find the footer
    if(r) return r;
  }
};

const onrefresh = () => {

  // get the footer element where all the buttons are presented
  let footer = findFooterDiv();

  // this should never happen
  if(!footer) return;

  // for each link:
  for(let element of footer.getElementsByTagName('a')) {
    
    // ignore if it is not a link to reels or explore page
    if(!isBlackListed(element)) continue;

    // find the top-most element under the overall footer and hide
    // removing the element seems to cause a ton of issues, so we won't
    walkUpwards(element, (element) => {
      if(element.parentElement !== footer) return;
      element.style.display = 'none';
      return true;
    });
  }
};

const main = () => {

  // get body
  let body = document.getElementsByTagName('body')[0];
  
  // this is bad, should never happen
  if (!body) return;

  // set up observer to call onrefresh every time body updates
  const observer = new MutationObserver(onrefresh);
  observer.observe(body, {
    attributes: true,
    childList: true,
    subtree: true,
  });
};

main();
