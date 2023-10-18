/** Reservation for Lunchly */

const moment = require("moment");

const db = require("../db");

/** A reservation for a party */

class Reservation {
  constructor({ id, customerId, numGuests, startAt, notes }) {
    this.id = id;
    this.customerId = customerId;
    this.numGuests = numGuests;
    this.startAt = startAt;
    this.notes = notes;
  }

  /** methods to get and set number of guests */
  get numGuests() {
    return this._numGuests;
  }
  set numGuests(val) {
    if (val < 1) {
      throw new Error("Cannot have fewer than 1 guest.");
    } else {
      this._numGuests = val;
    }
  }

  /** methods to get and set start time of reservation */

  get startAt() {
    return this._startAt;
  }

  set startAt(val) {
    if (val instanceof Date && !isNaN(val)) {
      this._startAt = val;
    } else {
      throw new Error("Not a valid startAt.");
    }
  }

  /** formatter for startAt */

  getformattedStartAt() {
    return moment(this.startAt).format("MMMM Do YYYY, h:mm a");
  }

  /** given a customer id, find their reservations. */

  static async getReservationsForCustomer(customerId) {
    const results = await db.query(
      `SELECT id, 
           customer_id AS "customerId", 
           num_guests AS "numGuests", 
           start_at AS "startAt", 
           notes AS "notes"
         FROM reservations 
         WHERE customer_id = $1`,
      [customerId]
    );

    return results.rows.map((row) => new Reservation(row));
  }

  /**get a reservation by id */
  static async getReservationById(id) {
    const result = await db.query(
      `SELECT id, customer_id AS "customerId",
    num_guests AS "numGuests",
    start_at AS "startAt",
    notes AS "notes"
    FROM reservations
    WHERE id = $1`,
      [id]
    );
    return new Reservation(result.rows[0]);
  }

  /** Save this reservation */
  async save() {
    if (this.id === undefined) {
      const result = await db.query(
        `INSERT INTO reservations (customer_id, num_guests, start_at, notes) VALUES($1,$2,$3,$4) RETURNING id`,
        [this.customerId, this.numGuests, this.startAt, this.notes]
      );
      this.id = result.rows[0].id;
    } else {
      await db.query(
        `UPDATE reservations SET customer_id=$1, num_guests=$2, start_at=$3, notes=$4 WHERE id=$5`,
        [this.customerId, this.numGuests, this.startAt, this.notes, this.id]
      );
    }
  }
}

module.exports = Reservation;
