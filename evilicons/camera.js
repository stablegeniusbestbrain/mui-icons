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
          _react2.default.createElement('path', { d: 'M39 38H11c-1.7 0-3-1.3-3-3V17c0-1.7 1.3-3 3-3h6c.2 0 .5-.2.6-.3l1.1-2.2c.4-.8 1.4-1.4 2.3-1.4h8c.9 0 1.9.6 2.3 1.4l1.1 2.2c.1.2.4.3.6.3h6c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3zM11 16c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1h-6c-.9 0-1.9-.6-2.3-1.4l-1.1-2.2c-.1-.2-.4-.4-.6-.4h-8c-.2 0-.5.2-.6.3l-1.1 2.2c-.4.9-1.4 1.5-2.3 1.5h-6z' }),
          _react2.default.createElement('path', { d: 'M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z' }),
          _react2.default.createElement('circle', { cx: '35', cy: '18', r: '1' }),
          _react2.default.createElement('path', { d: 'M12 12h4v1h-4zM25 21v-1c-2.8 0-5 2.2-5 5h1c0-2.2 1.8-4 4-4z' })
        )
      )
    )
  );
};

exports.default = Icon;