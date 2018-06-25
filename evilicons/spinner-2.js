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
          _react2.default.createElement('circle', { cx: '25', cy: '10', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.3', cx: '25', cy: '40', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.3', cx: '32.5', cy: '12', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.3', cx: '17.5', cy: '38', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.93', cx: '17.5', cy: '12', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.3', cx: '32.5', cy: '38', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.65', cx: '10', cy: '25', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.3', cx: '40', cy: '25', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.86', cx: '12', cy: '17.5', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.3', cx: '38', cy: '32.5', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.44', cx: '12', cy: '32.5', r: '2' }),
          _react2.default.createElement('circle', { opacity: '.3', cx: '38', cy: '17.5', r: '2' })
        )
      )
    )
  );
};

exports.default = Icon;