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
        _react2.default.createElement('path', { d: 'M264 325c0-22 20.5-38.7 40.2-54.8 7.9-6.5 15.4-12.5 21.5-19 26.5-27.7 26.2-51.7 26.2-71.1V176c0-44.2-30.8-124.6-32-128h-128c-1.2 3.4-32 83.5-32 128v4.1c0 19.3-.3 43.4 26.2 71.1 6.1 6.4 13.6 12.5 21.5 19C227.5 286.3 248 303 248 325v123h-72v16h160v-16h-72V325zM202.7 64h106.6c5.4 16 19.5 62.7 24.8 96H177.9c5.3-33.3 19.5-80 24.8-96z' })
      )
    )
  );
};

exports.default = Icon;