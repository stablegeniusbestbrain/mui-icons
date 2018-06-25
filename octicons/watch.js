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
      _react2.default.createElement('path', { d: 'M12 12h3v1.5h-4.5v-6H12V12zm9 0c0 3.3-1.8 6.2-4.5 7.8v2.7c0 .8-.7 1.5-1.5 1.5H9c-.8 0-1.5-.7-1.5-1.5v-2.7C4.8 18.2 3 15.3 3 12s1.8-6.2 4.5-7.8V1.5C7.5.7 8.2 0 9 0h6c.8 0 1.5.7 1.5 1.5v2.7C19.2 5.8 21 8.7 21 12zm-1.5 0c0-4.2-3.3-7.5-7.5-7.5S4.5 7.8 4.5 12s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5z' })
    )
  );
};

exports.default = Icon;