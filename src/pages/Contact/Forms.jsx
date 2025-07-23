import React from "react";
import s from "../style.module.scss";
export const Forms = () => {
  return (
    <div className={s.formGroup}>
      <form>
        <div class={s.form}>
          <label for="first">First Name</label>
          <input type="text" id="first" />
        </div>

        <div class={s.form}>
          <label for="last">Last Name</label>
          <input type="text" id="last" />
        </div>

        <div class={s.form}>
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div class={s.form}>
          <label for="company">Company</label>
          <input type="text" id="company" />
        </div>

        <div class={s.form}>
          <label for="message">Message</label>
          <textarea id="message"></textarea>
        </div>

        <button>Send</button>
      </form>
    </div>
  );
};
