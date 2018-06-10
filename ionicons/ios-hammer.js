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
        _react2.default.createElement('path', { d: 'M245.5 213c-1.3-.7-2.8-1-4.2-1-2.5 0-4.9.9-6.3 2.3 0 0-4.4 4.1-46.4 45.8-62.2 61.6-139 123.7-139 123.7-2.2 2.2-2.2 5.7 0 7.8l55.2 54.8c1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6c0 0 62.6-76.2 124.7-137.8 42-41.7 46.1-46 46.1-46 2.2-2.2 3.6-6.6 1.3-10.4l-3.9-6.4-29.7-29.8-5.6-3zm216.9 3.9L428.2 183c-1.1-1.1-2.5-1.6-3.9-1.6s-2.9.5-3.9 1.6l-3.7 3.7c-5.3 0-13.6-.7-18.1-5.2-6.9-6.8 1.1-20.3-5.1-29-6.1-8.7-15.9-19.7-22.9-26.7-7-7-34.6-33.4-81.2-52.5-16.4-6.7-32.5-9.3-46.8-9.3-26.3 0-46.9 8.5-54.2 15.2-5.4 5-11.1 14-3.1 14 .7 0 1.5-.1 2.4-.2 4.4-.7 13.2-1.5 23.2-1.5 15.6 0 34.2 2.1 44.1 10 16.2 13 29.5 30.3 30.6 52.7.9 18.4-4.3 30.2-23.4 50.7l29.9 29.9c17.5-17.2 26.3-25.2 36.5-28 4-1.1 8.3-1.5 12.7-1.5 9.6 0 19 2.2 23.3 4.5 5.1 2.7 9.7 11.3 10.2 18.6l-9.5 9.5c-2.2 2.2-2.2 5.7 0 7.8l34.2 33.9c1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l55.2-54.8c2-2.2 2-5.8-.1-7.9z' })
      )
    )
  );
};

exports.default = Icon;