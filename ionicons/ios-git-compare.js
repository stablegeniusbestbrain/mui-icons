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
        _react2.default.createElement('path', { d: 'M223.7 346.3c-3.1-3.1-8.2-3.1-11.3 0-3.1 3.1-3.1 8.2 0 11.3L264 408H160c-49.2 0-57-42.3-57-88V159.6c32.1-3.5 57-30.6 57-63.6 0-35.3-28.7-64-64-64S32 60.7 32 96c0 32.3 23.9 59 55 63.4V320c0 14.3 0 40.9 9 63 11 27.2 33.3 41 64 41h104l-49.7 50.4c-3.1 3.1-3.1 8.2 0 11.3 1.6 1.5 3.6 2.3 5.7 2.3s4.1-.7 5.7-2.3l57.6-57.4c6.3-6.3 6.3-16.4 0-22.6l-59.6-59.4zM48 96c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm377 256.6V192c0-14.3 0-40.9-9-63-11-27.2-33.3-41-64-41H248l49.7-50.4c3.1-3.1 3.1-8.2 0-11.3-1.6-1.5-3.6-2.3-5.7-2.3s-4.1.7-5.7 2.3l-57.6 57.4c-6.3 6.3-6.3 16.4 0 22.6l59.6 59.4c3.1 3.1 8.2 3.1 11.3 0 3.1-3.1 3.1-8.2 0-11.3L248 104h104c49.2 0 57 42.3 57 88v160.4c-32.1 3.5-57 30.6-57 63.6 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.3-23.9-59-55-63.4zM416 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z' })
      )
    )
  );
};

exports.default = Icon;