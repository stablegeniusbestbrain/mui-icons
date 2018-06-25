'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M144 416h224V144h-16v32H160v-32h-16z' }),
        _react2.default.createElement('path', { d: 'M320.8 96H304c0-5.6-1-11-2.7-16-2.1-6-5.3-11.4-9.4-16-8.8-9.9-21.6-16-35.9-16s-27.1 6.1-35.9 16c-4.1 4.6-7.3 10-9.4 16-1.7 5-2.7 10.4-2.7 16h-14.5c-8.8 0-17.5 6.2-17.5 15v49h160v-49c0-8.8-6.4-15-15.2-15zM256 111.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z' }),
        _react2.default.createElement('path', { d: 'M352 111v1-1zm48-47h-92.1c4.1 4.6 7.3 10 9.4 16l.1.1c.8-.1 1.7-.1 2.6-.1 17.3 0 31.4 13.8 32 31v17h32v304H128V128h32v-11c0-17.7 11.7-34 32-34h2.7c1.7-9 5.3-14.4 9.4-19H112c-8.8 0-16 7.2-16 16v368c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z' })
      )
    )
  );
};

exports.default = Icon;