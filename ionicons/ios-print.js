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
        _react2.default.createElement('path', { d: 'M128 224h256v224H128z' }),
        _react2.default.createElement('path', { d: 'M127.5 224.5h256v224h-256zm-16-160h288v32h-288z' }),
        _react2.default.createElement('path', { d: 'M432.5 112.5h-352c-17.645 0-33 12.842-33 30.31V301.2c0 17.468 15.355 33.3 33 33.3h31v-126h288v126h33c17.645 0 31-15.832 31-33.3V142.81c0-17.468-13.355-30.31-31-30.31z' })
      )
    )
  );
};

exports.default = Icon;