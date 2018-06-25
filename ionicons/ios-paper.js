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
        _react2.default.createElement('path', { d: 'M112 48v368H96V112H64v321.1c0 17 13.8 30.9 30.9 30.9h322.3c17 0 30.9-13.8 30.9-30.9V48H112zm48 64h128v16H160v-16zm0 160h192v16H160v-16zm240 96H160v-16h240v16zm0-160H160v-16h240v16z' })
      )
    )
  );
};

exports.default = Icon;