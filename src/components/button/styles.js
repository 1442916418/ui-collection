export default `:host {
  position: relative;
  display: inline-flex;
  padding: 0.25rem 0.625rem;
  box-sizing: border-box;
  vertical-align: middle;
  line-height: 1.8;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  font-size: var(--default-size);
  color: var(--default, #44476a);
  border-radius: var(--border-radius);
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff;
  transition: all 0.2s ease;
}
.btn {
  background: none;
  outline: 0;
  border: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  user-select: none;
  cursor: unset;
}
:host(:hover) {
  color: #44476a;
  text-decoration: none;
}
:host(.focus) :host(:focus) {
  outline: 0;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
}

:host(.disabled),
:host(:disabled) {
  opacity: 0.65;
  box-shadow: none;
}
:host(:not(:disabled):not(.disabled).active),
:host(:not(:disabled):not(.disabled):active) {
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
}
:host(not(:disabled):not(.disabled).active:focus),
:host(not(:disabled):not(.disabled):active:focus) {
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff, inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
}
a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}
:host([type='primary']) {
  color: #31344b;
  background-color: #e6e7ee;
  border-color: #e6e7ee;
  box-shadow: inset 0 1px 0 rgba(236, 240, 243, 0.15), 0 1px 1px rgba(38, 40, 51, 0.075);
}
:host([type='primary']:hover) {
  color: #31344b;
  background-color: #cfd1df;
  border-color: #c8cad9;
}
:host([type='primary']) :host([type='primary'].focus),
:host([type='primary']:focus) {
  box-shadow: inset 0 1px 0 rgba(236, 240, 243, 0.15), 0 1px 1px rgba(38, 40, 51, 0.075),
    0 0 0 0.0625rem rgba(203, 204, 214, 0.5);
}
:host([type='primary'].disabled),
:host([type='primary']:disabled) {
  color: #31344b;
  background-color: #e6e7ee;
  border-color: #e6e7ee;
}
`