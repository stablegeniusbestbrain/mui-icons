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
        _react2.default.createElement('path', { d: 'M32 376h283.35c6.186-14.112 20.28-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.28 24-36.65 24s-30.465-9.888-36.65-24H32m0-168h91.35c6.186-14.112 20.28-24 36.65-24s30.465 9.888 36.65 24H480v32H196.65c-6.186 14.112-20.28 24-36.65 24s-30.465-9.888-36.65-24H32m0-168h283.35c6.186-14.112 20.28-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.28 24-36.65 24s-30.465-9.888-36.65-24H32' })
      )
    )
  );
};

exports.default = Icon;