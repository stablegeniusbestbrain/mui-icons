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
      _react2.default.createElement('path', { d: 'M12.1 18.5l6.2-6.2c-1.4.3-3 .9-4.2 2.2-1.1 1-1.7 2.3-2 4zm8.7-8.5h.2c.4 0 .8.3.9.6.2.4.1.8-.2 1.1l-10 10c-.2.2-.4.3-.7.3l-.4-.1c-.3-.1-.6-.5-.6-.9-.2-3.3.7-6 2.7-8 2.8-2.8 6.9-3 8.1-3zM12 2c4.5 0 8.3 3 9.6 7.1L20 9h-.6c-1.2-2.9-4-5-7.4-5-4.4 0-8 3.6-8 8 0 3.4 2.1 6.2 5 7.4 0 .7 0 1.5.1 2.2C5 20.3 2 16.5 2 12 2 6.5 6.5 2 12 2z' })
    )
  );
};

exports.default = Icon;