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
          _react2.default.createElement('path', { d: 'M38 35h-2V17c0-.6-.4-1-1-1H18v-2h17c1.7 0 3 1.3 3 3v18z' }),
          _react2.default.createElement('path', { d: 'M37 36.5l-6.8-7.8 1.6-1.4 5.2 6.2 5.2-6.2 1.6 1.4zM32 36H15c-1.7 0-3-1.3-3-3V15h2v18c0 .6.4 1 1 1h17v2z' }),
          _react2.default.createElement('path', { d: 'M18.2 22.7L13 16.5l-5.2 6.2-1.6-1.4 6.8-7.8 6.8 7.8z' })
        )
      )
    )
  );
};

exports.default = Icon;