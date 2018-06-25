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
        _react2.default.createElement('path', { d: 'M127.9 376c0-2 .7-4 2.2-5.5 3.1-3.2 8.1-3.3 11.3-.2 20.9 20 46.8 30.8 79.3 32.8 19 1.2 27.1 5.8 35 10.3 9.3 5.3 18.9 10.7 54.2 10.7 71.7 0 122-59.2 122-132v-56c0-24.7-3-48.9-16.1-69.8-12.8-20.4-26.9-37-48.3-47.9-3.9-2-5.5-6.8-3.5-10.8 2-3.9 6.8-5.5 10.8-3.5 24 12.2 40.2 30.8 54.6 53.6 14.8 23.5 18.5 50.6 18.5 78.3v56c0 81.6-57.5 148-138 148-39.4 0-51.4-6.8-62-12.8-7.2-4.1-12.8-7.3-28.2-8.2-36.4-2.3-65.6-14.4-89.3-37.2-1.6-1.6-2.5-3.7-2.5-5.8z' }),
        _react2.default.createElement('path', { d: 'M272.7 402c0-.4 0-.9.1-1.3.7-4.4 4.8-7.3 9.2-6.6 35.5 5.8 66.1-2.4 88.5-23.9 3.2-3.1 8.3-2.9 11.3.2 3.1 3.2 2.9 8.3-.2 11.3-26.2 25.1-61.5 34.8-102.1 28.1-4-.6-6.8-4-6.8-7.8zM64 292v-56c0-27.7 3.8-54.8 18.5-78.3 14.3-22.8 30.6-41.4 54.6-53.6 3.9-2 8.8-.4 10.8 3.5s.4 8.8-3.5 10.8c-21.4 10.9-35.5 27.5-48.3 47.9-13.2 20.8-16.2 45-16.2 69.7v56c0 34.8 9 70.1 38.8 96.9 30.3 27.4 71 43.1 111.6 43.1 4.4 0 8 3.6 8 8s-3.6 8-8 8c-44.5 0-89-17.2-122.3-47.2-33.1-29.9-44-69.5-44-108.8z' }),
        _react2.default.createElement('circle', { cx: '304.2', cy: '104', r: '19' }),
        _react2.default.createElement('path', { d: 'M375.3 129c-1.9.6-3.9 1-6.1 1-10.5 0-19-8.5-19-19s8.5-19 19-19c5.7 0 10.7 2.4 14.2 6.3-3-19.4-19.8-34.3-40-34.3h-175c-19.6 0-36.1 14-39.8 32.7 3.4-3 7.8-4.7 12.6-4.7 10.5 0 19 8.5 19 19s-8.5 19-19 19c-1.5 0-2.9-.2-4.3-.5 7.4 8.9 18.8 14.5 31.5 14.5h175c12.9 0 24.6-5.8 31.9-15zm-98.1-25c0-14.9 12.1-27 27-27s27 12.1 27 27-12.1 27-27 27c-14.7 0-27-12.1-27-27z' })
      )
    )
  );
};

exports.default = Icon;