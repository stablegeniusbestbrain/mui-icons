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
        _react2.default.createElement('circle', { cx: '256', cy: '88', r: '8' }),
        _react2.default.createElement('circle', { cx: '256', cy: '424', r: '8' }),
        _react2.default.createElement('circle', { cx: '424', cy: '256', r: '8' }),
        _react2.default.createElement('circle', { cx: '88', cy: '256', r: '8' }),
        _react2.default.createElement('circle', { cx: '110.5', cy: '172', r: '8' }),
        _react2.default.createElement('circle', { cx: '401.5', cy: '340', r: '8' }),
        _react2.default.createElement('circle', { cx: '340', cy: '110.5', r: '8' }),
        _react2.default.createElement('circle', { cx: '172', cy: '401.5', r: '8' }),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('circle', { cx: '110.5', cy: '340', r: '8' }),
          _react2.default.createElement('circle', { cx: '401.5', cy: '172', r: '8' }),
          _react2.default.createElement('circle', { cx: '172', cy: '110.5', r: '8' }),
          _react2.default.createElement('circle', { cx: '340', cy: '401.5', r: '8' })
        ),
        _react2.default.createElement('path', { d: 'M269.9 248c-2.9-5-8.1-7.8-13.4-8l-30-55.4c-2.3-3.8-7.2-5-11-2.7s-5 7.2-2.7 11l29.6 54.9c-2.9 4.8-3.2 11.1-.2 16.3 1.5 2.5 3.5 4.5 5.9 5.8V384c0 4.4 3.6 8 8 8s8-3.6 8-8V269.9c7.6-4.5 10.2-14.2 5.8-21.9z' }),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('path', { d: 'M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0 81.2-81.2 81.2-213 0-294.2zm-12.3 281.9c-74.3 74.3-195.3 74.3-269.6 0-74.3-74.3-74.3-195.3 0-269.6s195.3-74.3 269.6 0c74.4 74.3 74.4 195.3 0 269.6z' })
        )
      )
    )
  );
};

exports.default = Icon;