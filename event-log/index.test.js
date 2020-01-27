const faker = require('faker');
const camelCase = require('lodash.camelcase');
const datefns = require('date-fns');
const { EventLog, Event } = require('./index');
const cwd = process.cwd();
const fs = require('fs-extra');
const wait = require('waait');

const createEvent = (date = new Date()) => {
  const table = 'EVENTS';
  const name = camelCase(faker.lorem.words());
  const meta = {
    timestamp: date,
    non_interaction: false,
  };

  return new Event(table, name, meta);
};

describe('event log functionality', () => {
  test('expects instance of event log returned when new EventLog called', () => {
    const eventLog = new EventLog();

    expect(eventLog.constructor).toEqual(EventLog);
    expect(eventLog.log.length).toEqual(0);
  });

  test('expects instance of event returned when new Event called', () => {
    const table = 'EVENTS';
    const name = 'trackEvent';
    const meta = {
      timestamp: new Date(),
      non_interaction: false,
    };

    const event = new Event(table, name, meta);

    expect(event.constructor).toEqual(Event);
    expect(event.name).toEqual(name);
    expect(event.table).toEqual(table);
    expect(event.meta).toEqual(meta);
    expect(event.meta.timestamp.constructor).toEqual(Date);
    expect(event.meta.non_interaction).toEqual(meta.non_interaction);
  });

  test('expects event log to build up in length using add method', () => {
    const eventLog = new EventLog();
    const events = [];
    for (let i = 0; i < 10; i++) {
      events.push(createEvent());
    }

    for (let el of events) {
      eventLog.push(el);
    }

    expect(eventLog.log.length).toEqual(10);
    expect(eventLog.log).toEqual(events);
  });

  test('expects event log to return to empty log using clear method', () => {
    const eventLog = new EventLog();
    const events = [];
    for (let i = 0; i < 10; i++) {
      events.push(createEvent());
    }

    for (let el of events) {
      eventLog.push(el);
    }

    expect(eventLog.log.length).toEqual(10);
    expect(eventLog.log).toEqual(events);

    eventLog.clear();
    expect(eventLog.log.length).toEqual(0);
  });

  describe('#replay', () => {
    test('expects replay method of EventLog to return list of events to replay', () => {
      const eventLog = new EventLog();
      const events = [];
      for (let i = 0; i < 10; i++) {
        events.push(createEvent());
      }

      for (let el of events) {
        eventLog.push(el);
      }

      // eventLog.replay();
    });

    test('expects replay method of EventLog to return list of events to replay', async () => {
      const eventLog = new EventLog();

      const events = [];
      for (let i = 0; i < 10; i++) {
        const date = datefns.add(new Date(), {
          seconds: 10 * i,
        });

        events.push(createEvent(date));
      }

      for (let el of events) {
        eventLog.push(el);
      }

      // eventLog.replay();
    });
  });

  test('expects getAt method of Event at index', () => {
    const eventLog = new EventLog();
    const events = [];
    for (let i = 0; i < 10; i++) {
      events.push(createEvent());
    }

    for (let el of events) {
      eventLog.push(el);
    }

    expect(eventLog.getAt(5)).toEqual(events[5]);
  });

  test('expects saveSnapshot method of write current snapshot', async () => {
    const eventLog = new EventLog();

    const events = [];
    for (let i = 0; i < 10; i++) {
      const date = datefns.add(new Date(), {
        seconds: 10 * i,
      });

      events.push(createEvent(date));
    }

    for (let el of events) {
      eventLog.push(el);
    }

    const filepath = cwd + '/log/' + datefns.getUnixTime(new Date()) + '.json';
    eventLog.saveSnapshot(filepath);

    const snapshot = fs.readJsonSync(filepath);

    await wait(1000);
    expect(snapshot).toEqual(JSON.parse(JSON.stringify(events)));
  });

  test('expects restoreSnapshot to write fetched snapshot', () => {
    const eventLog = new EventLog();
    expect(eventLog.log.length).toEqual(0);

    const filepath = cwd + '/log/1580110344.json';
    const snapshot = fs.readJsonSync(filepath);

    eventLog.restoreSnapshot(snapshot);
    expect(eventLog.log.length).toEqual(10);
  });
});
