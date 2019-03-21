/* eslint-disable no-prototype-builtins */
const NAME = 'Joseph.';
const WELCOME_MESSAGE_TEMPLATE = ['night', 'morning', 'afternoon', 'evening'];

// All shortcuts are in a `SHORTCUT_STARTER+shortcutKey` format.
// So, for example, pressing `tab+q` would redirect you to https://google.com/?q=q
const SHORTCUT_STARTER = 'tab';

// How much time (in milliseconds) you have to press shortcutKey after pressing SHORTCUT_STARTER.
// Also change --SHORTCUT_TIMEOUT in styles.css if you change this option.
const SHORTCUT_TIMEOUT = 1500;

// The groups of links are generated from this object. Edit it to edit the page's contents.
// shortcutKey must hold an all-lowercase single button. Theoretically should work with values
// like `esc` and `f1`, but intended to be used with just regular latin letters.
const MASTER_MAP = [
  {
    groupName: 'Studies',
    items: [
      { name: 'Item A', shortcutKey: 'q', url: 'https://google.com/?q=q' },
      { name: 'Item B', shortcutKey: 'w', url: 'https://google.com/?q=w' },
      { name: 'Item C', shortcutKey: 'e', url: 'https://google.com/?q=e' },
    ],
  },
  {
    groupName: 'Work',
    items: [
      { name: 'Item D', shortcutKey: 'a', url: 'https://google.com/?q=a' },
      { name: 'Item E', shortcutKey: 's', url: 'https://google.com/?q=s' },
      { name: 'Item F', shortcutKey: 'd', url: 'https://google.com/?q=d' },
    ],
  },
  {
    groupName: 'Personal',
    items: [
      { name: 'Item I', shortcutKey: 'z', url: 'https://google.com/?q=z' },
      { name: 'Item J', shortcutKey: 'x', url: 'https://google.com/?q=x' },
      { name: 'Item K', shortcutKey: 'c', url: 'https://google.com/?q=c' },
    ],
  },
];

const $container = document.getElementById('content');
const getUrl = {};

const $shortcutDisplayList = document.getElementsByClassName('shortcut');
let listeningForShortcut = false;
let listenerTimeout;

function setupWelcomeMessage() {
  let curHours = new Date().getHours();
  // Simply dividing current hours by 6 proves to be a good enough aproximation.
  curHours = Math.floor(curHours / 6); if (curHours === 4) curHours = 3;
  const welcome = `Good ${WELCOME_MESSAGE_TEMPLATE[curHours]}, ${NAME}`;
  document.getElementById('welcome-string').innerHTML = welcome;
}

function setupGroups() {
  for (let i = 0; i < MASTER_MAP.length; i += 1) {
    const curGroupData = MASTER_MAP[i];

    const group = document.createElement('div');
    group.className = 'group';
    $container.appendChild(group);

    const header = document.createElement('h1');
    header.innerHTML = curGroupData.groupName;
    group.appendChild(header);

    for (let j = 0; j < curGroupData.items.length; j += 1) {
      const curItemData = curGroupData.items[j];

      const pContainer = document.createElement('p');
      group.appendChild(pContainer);

      const link = document.createElement('a');
      link.innerHTML = curItemData.name;
      link.setAttribute('href', curItemData.url);
      pContainer.appendChild(link);

      const shortcutDisplay = document.createElement('span');
      shortcutDisplay.innerHTML = curItemData.shortcutKey;
      shortcutDisplay.className = 'shortcut';
      shortcutDisplay.style.animation = 'none';
      pContainer.appendChild(shortcutDisplay);

      getUrl[curItemData.shortcutKey] = curItemData.url;
    }
  }
}

function shortcutListener(e) {
  const key = e.key.toLowerCase();

  if (listeningForShortcut && getUrl.hasOwnProperty(key)) {
    window.location = getUrl[key];
  }

  if (key === SHORTCUT_STARTER) {
    clearTimeout(listenerTimeout);
    listeningForShortcut = true;

    // Animation reset
    for (let i = 0; i < $shortcutDisplayList.length; i += 1) {
      $shortcutDisplayList[i].style.animation = 'none';
      setTimeout(() => { $shortcutDisplayList[i].style.animation = ''; }, 10);
    }

    listenerTimeout = setTimeout(() => { listeningForShortcut = false; }, SHORTCUT_TIMEOUT);
  }
}

function setupQuote() {
  const quotes = ['And a step backward, after making a wrong turn, is a step in the right direction. <br/>- Kurt Vonnegut', 'Positivity, like any skill, you get better at by practicing it. <br/>- Jackson Bliton',
    'All we have to decide is what to do with the time that is given us. <br/>- J.R.R. Tolkien', 'More is lost by indecision than wrong decision. <br/>- Cicero', "A ship is safe in harbor, but that's not what ships are for. <br/>- William Shedd",
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit. <br/>- Anonymous', 'Not all those who wander are lost. <br/>- J.R.R. Tolkien', 'Calm seas make poor sailors. <br/>- Anonymous',
    'There is nothing noble in being superior to your fellow men, true nobility is being superior to your former self. <br/>- Ernest Hemingway',
    'Everyone you meet is fighting a battle that you know nothing about. <br/>- Anonymous', 'Kindness is the language which the deaf can hear and the blind can see. <br/>- Mark Twain',
    'To strive, to seek, to find, and not to yield. <br/>- Tennyson', 'Be the change you wish to see in the world. <br/>- Ghandi', 'Do or do not. There is no try. <br/>- Yoda',
    'Would I rather be feared or loved? Easy - both. I want people to be afraid of how much they love me. <br/>- Michael Scott', 'Hodor. <br/>- Hodor',
    "Don't ask for a lighter load, ask for a stronger back. <br/>- Phillips Brooks", 'Good judgement comes from experience and experience comes from bad judgement. <br/>- Anonymous',
    'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. <br/>- Albert Einstein']

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById('quote').innerHTML = randomQuote;
}

function main() {
  setupWelcomeMessage();
  setupGroups();
  setupQuote();
  document.addEventListener('keyup', shortcutListener, false);
}

main();
