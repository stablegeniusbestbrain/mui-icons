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
      _react2.default.createElement('path', { d: 'M9.1 17H6.5l-4.9-5 4.9-5h2.6l1.3-2.3L17.2 3l1.9 6.7-1.3 2.3 1.3 2.3-1.9 6.7-6.8-1.7L9.1 17zm.2-.2l5.1 1.3-3-5.1H5.5l3.8 3.8zm6.8.3l1.4-5.1-1.4-5.1-2.9 5.1 2.9 5.1zM9.3 7.2L5.5 11h5.9l3-5.1-5.1 1.3z' })
    )
  );
};

exports.default = Icon;