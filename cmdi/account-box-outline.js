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
      _react2.default.createElement('path', { d: 'M19 19H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2.5 13.3c0-1.5-3-2.3-4.5-2.3s-4.5.8-4.5 2.3v.7h9M12 12.3c1.2 0 2.3-1.1 2.3-2.3 0-1.2-1.1-2.2-2.3-2.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.3 2.2 2.3z' })
    )
  );
};

exports.default = Icon;