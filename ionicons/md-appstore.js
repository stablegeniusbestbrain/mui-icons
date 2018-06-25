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
        _react2.default.createElement('path', { d: 'M464 152H360c0-57-46.562-103.86-104-103.86S152 95 152 152H48c18.688 216 13 312 13 312h390c-.002 0-5.69-98 13-312zM256 74.105c43.008 0 78 34.895 78 77.895H178c0-43 34.99-77.895 78-77.895zM204 397.64V228.867l143 84.387-143 84.386z' })
      )
    )
  );
};

exports.default = Icon;