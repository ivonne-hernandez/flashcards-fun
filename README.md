# FlashCards
The FlashCards application runs through a pre-set deck of flash cards via the command line interface. You will be prompted for each question, have the opportunity to select an answer and be given feedback regarding each individual response. The percentage of questions that were answered correctly, as well as the time that it took to complete the game will be displayed at the end of the round.

![flash cards example gif](src/flashCards.gif)

---

## Technologies Used
* JavaScript
* ES5 & ES6

---
## Install/Setup Instructions:

Clone down this repository into your terminal via the following command:
```bash
git clone [remote-address] [what you want to name the repo (optional)]
```

Once you have cloned the repo, change into the directory:

```bash
cd [name of repo]
```
Install the library dependencies by running:

```bash
npm install
```

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
Welcome to FlashCards! You are playing with 30 cards.
-----------------------------------------------------------
? What allows you to define a set of related information using key-value pairs? 
  1) object
  2) array
  3) function
  Answer: 
```
To exit the command line interface, press control + c.