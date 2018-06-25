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
        _react2.default.createElement('path', { d: 'M304 192v-16h96v-8c0-57.8-41.4-106.4-96-117.6V112h-16V48.3c-2.6-.2-5.3-.3-8-.3h-16v80h-16V48h-16c-2.7 0-5.4.1-8 .3V112h-16V50.4c-54.6 11.2-96 59.8-96 117.6v8h96v16h-96v32h96v16h-96v32h96v16h-96v8c0 20.2 5.1 39.3 14 56h260c8.9-16.7 14-35.8 14-56v-8h-96v-16h96v-32h-96v-16h96v-32h-96zm71.8 176H136.2c20.6 27.3 52.7 45.7 88.8 47.8l-1 .2v48h64v-48l-1.5-.2c36.4-2 68.6-20.3 89.3-47.8z' })
      )
    )
  );
};

exports.default = Icon;