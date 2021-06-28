// 11 module

// Напиши функцию delay(ms), которая возвращает промис, 
// переходящий в состояние "resolved" через ms миллисекунд. 
// Значением исполнившегося промиса должно быть то кол-во миллисекунд 
// которое передали во время вызова функции delay.

const delay = ms => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);

    }, ms)
  })
};

const logger1 = time => console.log('Delay:', `Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger1); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms


// ================= TASK 2 ========================

// Перепиши функцию toggleUserState() так, чтобы она не использовала 
// callback-функцию callback, а принимала всего 
// два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  return Promise.resolve(updatedUsers)
};
// вар 2
const toggleUserState2 = async (allUsers, userName) => {//делает асинхрон фу-цию. возвращает промис
  const updatedUsers2 = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  return updatedUsers2;
};

const logger = updatedUsers => console.table(updatedUsers);
// const logger = a => console.table(a);//тоже работает

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);


// =================================
async function getPromise() {
  return {
    res: 'Promise resolve',
  };
}

console.log(getPromise().then(resp => console.log(resp)));

// ================= TASK ===================

//Два Taймера обратного отсчет

class CountdownTimer {   //занимается только подчетом. не обновляет интерфес!
  constructor({ selector, targetDate }) {
    // this.intervalId = null;
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  };

  start() {
    console.log(this.selector.querySelector('[data-value="days"]'));
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 *
        60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      this.changeTime(days, hours, mins, secs);

    }, 1000);
  }
  changeTime(days, hours, mins, secs) {
    this.selector.querySelector('[data-value="days"]').textContent = days;
    this.selector.querySelector('[data-value="hours"]').textContent = hours;
    this.selector.querySelector('[data-value="mins"]').textContent = mins;
    this.selector.querySelector('[data-value="secs"]').textContent = secs;
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
}).start();

console.log('timer-1');

new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jul 17, 2022'),
}).start();

console.log('timer-2');
console.log('Два Taймера обратного отсчет');

// // ================= TASK ===================

const arr = [
  ["some"],
  12,
  [34, [2, [33]], [12, [23, 89, [778, 999]]], [["88"]]],
  34,
  [23],
  "hello",
  ["five", ["some arr", ["last arr"], { name: "John" }]],
];
// 1 вар
function getFlat1(arr) {
  //   return arr.join('').split(',');
  return arr.flat(Infinity);
}
console.log('arr.join.split:', getFlat1(arr));
console.log('arr.flat(Infinity):', getFlat1(arr));

// 2 вар
function getFlat(arr) {
  let newArr = [];
  arr.forEach((el) => {
    Array.isArray(el) ? newArr = [...newArr, ...getFlat(el)] : newArr.push(el);//тернарник
    //или запись
    //   if (Array.isArray(el)) {
    //     newArr = [...newArr, ...getFlat(el)];
    //   } else {
    //     newArr.push(el);
    //   }
  });
  return newArr;
}

console.log('arr.forEach((el):', getFlat1(arr));

  //==================================







