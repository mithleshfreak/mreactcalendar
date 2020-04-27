import React from 'react';
import moment from 'moment';
import { getWeekDate } from '../utils/utils';
export default function WeekView(_ref) {
  var onPrevWeek = _ref.onPrevWeek,
      onNextWeek = _ref.onNextWeek,
      weekdaysShort = _ref.weekdaysShort,
      dateObject = _ref.dateObject,
      weekText = _ref.weekText,
      daysInWeekView = _ref.daysInWeekView;

  var renderWeekDays = function renderWeekDays() {
    var today = moment().format("l");
    return weekdaysShort.map(function (day, i) {
      return /*#__PURE__*/React.createElement("th", {
        key: day,
        className: "week-day".concat(today === getWeekDate(i, dateObject) ? ' today ' : '', " _week_view_th")
      }, /*#__PURE__*/React.createElement("div", null, day), /*#__PURE__*/React.createElement("div", {
        className: "date"
      }, moment(getWeekDate(i, dateObject)).format('Do MMM')));
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "_heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPrevWeek();
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/left.svg?alt=media&token=17019ae5-6b59-4c78-80f4-a2cf6d8a18ff",
    alt: "prev"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "month-name",
    style: {
      fontSize: '1.8em'
    }
  }, weekText), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onNextWeek();
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/right.svg?alt=media&token=17d7b4e9-2304-4480-8de3-62d6ffb600b4",
    alt: "next"
  })))), /*#__PURE__*/React.createElement("table", {
    className: "_calendar_table",
    cellPadding: 0
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      border: '1px solid rgb(222, 222, 222)'
    }
  }, renderWeekDays())), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      border: '1px solid rgb(222, 222, 222)',
      borderTop: 'none'
    }
  }, daysInWeekView()))));
}