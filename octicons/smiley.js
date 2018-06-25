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
      _react2.default.createElement('path', { d: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm7.2 19.2a10.1 10.1 0 0 1-3.2 2.2c-1.3.5-2.6.8-4 .8s-2.7-.3-4-.8c-1.2-.5-2.3-1.3-3.2-2.2A10.2 10.2 0 0 1 2.6 16a9.9 9.9 0 0 1-.8-4c0-1.4.3-2.7.8-4 .5-1.2 1.3-2.3 2.2-3.2.9-.9 2-1.7 3.2-2.2a9.9 9.9 0 0 1 4-.8c1.4 0 2.7.3 4 .8 1.2.5 2.3 1.3 3.2 2.2.9.9 1.7 2 2.2 3.2.5 1.3.8 2.6.8 4s-.3 2.7-.8 4c-.5 1.2-1.3 2.3-2.2 3.2zM6 10.2v-.9c0-1 .8-1.8 1.8-1.8h.9c1 0 1.8.8 1.8 1.8v.9c0 1-.8 1.8-1.8 1.8h-.9c-1 0-1.8-.8-1.8-1.8zm7.5 0v-.9c0-1 .8-1.8 1.8-1.8h.9c1 0 1.8.8 1.8 1.8v.9c0 1-.8 1.8-1.8 1.8h-.9c-1 0-1.8-.8-1.8-1.8zm6 4.8c-1.1 2.8-4.4 4.5-7.5 4.5S5.6 17.8 4.5 15c-.2-.6.3-1.5 1-1.5h12.9c.6 0 1.3.9 1.1 1.5z' })
    )
  );
};

exports.default = Icon;