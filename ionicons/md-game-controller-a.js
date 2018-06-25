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
        _react2.default.createElement('path', { d: 'M156 215h-24v31h-31v24h31v30h24v-30h30v-24h-30z' }),
        _react2.default.createElement('path', { d: 'M369.3 144H142.7C81.5 144 32 190.5 32 255.4c0 65 49.5 112.6 110.7 112.6h226.5c61.2 0 110.7-47.6 110.7-112.6.1-64.9-49.4-111.4-110.6-111.4zM144.2 316.5c-33.1 0-60-27.1-60-60.5s26.9-60.5 60-60.5 60 27.1 60 60.5-26.8 60.5-60 60.5zm203.1-47.4c-7.2 7.2-19 7.2-26.2 0-7.2-7.2-7.2-19 0-26.2 7.2-7.2 19-7.2 26.2 0 7.2 7.2 7.2 19 0 26.2zm37.5 37.5c-7.2 7.2-19 7.2-26.2 0-7.2-7.2-7.2-19 0-26.2 7.2-7.2 19-7.2 26.2 0s7.3 19 0 26.2zm0-75c-7.2 7.2-19 7.2-26.2 0-7.2-7.2-7.2-19 0-26.2 7.2-7.2 19-7.2 26.2 0s7.3 19 0 26.2zm37.6 37.5c-7.2 7.2-19 7.2-26.2 0s-7.2-19 0-26.2c7.2-7.2 19-7.2 26.2 0 7.2 7.2 7.2 19 0 26.2z' })
      )
    )
  );
};

exports.default = Icon;