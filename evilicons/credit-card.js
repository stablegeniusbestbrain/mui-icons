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
        { style: { transform: 'translate(-3px,-3px)' } },
        _react2.default.createElement(
          'g',
          { style: { transform: 'scale(0.6)' } },
          _react2.default.createElement('path', { d: 'M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z' }),
          _react2.default.createElement('path', { d: 'M9 16h32v6H9zM12 26h1v2h-1zM14 26h1v2h-1zM16 26h1v2h-1zM19 26h1v2h-1zM21 26h1v2h-1zM23 26h1v2h-1zM26 26h1v2h-1zM28 26h1v2h-1zM30 26h1v2h-1zM33 26h1v2h-1zM35 26h1v2h-1zM37 26h1v2h-1z' })
        )
      )
    )
  );
};

exports.default = Icon;