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
        _react2.default.createElement('path', { d: 'M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.6 0 22.883 18.718 41.6 41.6 41.6s41.6-18.717 41.6-41.6c0-22.883-18.72-41.6-41.6-41.6zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.08-5.2-5.2 0-1.035 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.6 0 29.128-8.316 36.4-21.835l74.882-128.8c1.237-2.46 2.082-6.246 2.082-10.4 0-11.445-9.364-19.764-20.8-19.764H135.364L115.6 51.2H48zm326.4 326.4c-22.883 0-41.6 18.718-41.6 41.6 0 22.883 18.717 41.6 41.6 41.6s41.6-18.718 41.6-41.6c0-22.883-18.72-41.6-41.6-41.6z' })
      )
    )
  );
};

exports.default = Icon;