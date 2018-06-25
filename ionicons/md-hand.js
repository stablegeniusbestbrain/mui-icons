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
        _react2.default.createElement('path', { d: 'M450.68 273.5c-14.586-14.577-36.055-15.89-50.64-1.312l-41.687 41.664c-10.852 10.836-23.93 10.86-31.564 1.852-5.058-5.968-3.062-24.374-1.645-36.05l20.907-171.848c1.867-15.353-9.07-30.185-24.43-32.05-15.358-1.868-29.322 9.938-31.19 25.288L267.37 236.02c-1.205 3.36-3.79 3.94-4.08-.58L255.44 60c0-15.465-12.542-28-28.014-28-15.473 0-28.015 12.535-28.015 28l-.55 176.752c.145 2.04-1.605 2.624-1.92.294l-24.924-137.97c-2.75-15.218-17.323-26.202-32.548-23.452-15.227 2.748-25.34 18.187-22.59 33.403l22.192 161.455c.023 2.872-.94 4.513-2.308.83l-33.11-88.516c-5.18-14.572-21.195-23.065-35.775-17.89-14.58 5.178-22.2 22.062-17.023 36.632l58.042 189.625c.303 1.046.624 2.085.953 3.118l.12.39c.01.032.025.06.035.09C126.08 444.232 172.57 480 227.427 480c35.116 0 71.59-12.378 99.357-33.672l.003-.002c29.99-18.05 126.07-121.347 126.07-121.347 14.588-14.578 12.41-36.9-2.178-51.48z' })
      )
    )
  );
};

exports.default = Icon;