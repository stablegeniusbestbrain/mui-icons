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
      _react2.default.createElement('path', { d: 'M12 11c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM4.2 4.2c1.5-1.4 4.6-.8 7.8 1.4 3.2-2.2 6.3-2.8 7.8-1.4 1.4 1.5.8 4.6-1.4 7.8 2.2 3.2 2.8 6.3 1.4 7.8-1.5 1.4-4.6.8-7.8-1.4-3.2 2.2-6.3 2.8-7.8 1.4-1.4-1.5-.8-4.6 1.4-7.8-2.2-3.2-2.8-6.3-1.4-7.8zm11.3 4.3c.7.6 1.2 1.2 1.7 1.8 1.4-2.1 1.9-3.9 1.2-4.7-.8-.7-2.6-.2-4.7 1.2.6.5 1.2 1 1.8 1.7zm-7 7c-.6-.6-1.2-1.2-1.7-1.8-1.4 2.1-1.9 3.9-1.2 4.7.8.7 2.6.2 4.7-1.2-.6-.5-1.2-1.1-1.8-1.7zM5.6 5.6c-.7.8-.2 2.6 1.2 4.7.5-.6 1.1-1.2 1.7-1.8.6-.6 1.2-1.2 1.8-1.7-2.1-1.4-3.9-1.9-4.7-1.2zm4.3 8.5c.7.7 1.4 1.4 2.1 1.9.7-.5 1.4-1.2 2.1-1.9.7-.7 1.4-1.4 1.9-2.1-.5-.7-1.2-1.4-1.9-2.1-.7-.7-1.4-1.4-2.1-1.9-.7.5-1.4 1.2-2.1 1.9-.7.7-1.4 1.4-1.9 2.1.5.7 1.2 1.4 1.9 2.1zm8.5 4.3c.7-.8.2-2.6-1.2-4.7-.5.6-1.1 1.2-1.7 1.8-.6.6-1.2 1.2-1.8 1.7 2.1 1.4 3.9 1.9 4.7 1.2z' })
    )
  );
};

exports.default = Icon;