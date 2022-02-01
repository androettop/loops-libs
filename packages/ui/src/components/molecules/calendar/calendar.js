import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Segment from "../../atoms/segment/segment";
import Button from "../../atoms/button/button";
import CalendarButton from "../../atoms/calendarbutton/calendarbutton";
import Col from "../../atoms/col/col";
import Row from "../../atoms/row/row";
import { StyledCalendar } from "./calendar.styles";
import { ONE_DAY, sameDay, isBetwen, monthList } from "../../../utils/date";

const CALENDAR_ROWS = 6;

const calendarModes = ["day", "month", "year"];

const pushDay = (days, dayDate) => {
  const currentWeek = days[days.length - 1];
  currentWeek.push(dayDate);
  if (currentWeek.length === 7 && days.flat().length < CALENDAR_ROWS * 7) {
    days.push([]);
  }
};

const Calendar = ({ value, range, onChange, ...props }) => {
  const defaultDisplayDate = range ? value?.from : value;
  const [displayDate, setDisplayDate] = useState(
    defaultDisplayDate ? new Date(defaultDisplayDate) : new Date()
  );

  const [selectingValue, setSelectingValue] = useState();
  const [hoveringValue, setHoveringValue] = useState();
  const [mode, setMode] = useState(calendarModes[0]);
  const [firstSelectorYear, setFirstSelectorYear] = useState(
    displayDate.getFullYear() - 4
  );

  // validate and reset display date when value change
  useEffect(() => {
    if (value) {
      // check value
      if (range && (!value.to || !value.from)) {
        throw new Error(
          "Range calendar should have a value with to and from properties {from:Date,to:Date}"
        );
      }
      if (!range && !(value instanceof Date)) {
        throw new Error("Value prop should be a Date object");
      }
      // set display date
      if (range) {
        setDisplayDate(new Date(value?.from));
      } else {
        setDisplayDate(new Date(value));
      }
    }
  }, [value]);

  const daysArray = useMemo(() => {
    const days = [[]];

    const firstDay = new Date(
      displayDate.getFullYear(),
      displayDate.getMonth(),
      1
    );
    const lastDay = new Date(
      displayDate.getFullYear(),
      displayDate.getMonth() + 1,
      0
    );

    /** Cantidad de dias del mes anterior a mostrar
     *  Si la semana comienza el domingo (0) se muestra
     * la ultima semana del mes anterior completa
     */
    const daysOfPreviousMonth = firstDay.getDay() || 7;

    // fill the previous month days
    for (let i = 0; i < daysOfPreviousMonth; i += 1) {
      const dayDate = new Date(
        firstDay.getTime() - (daysOfPreviousMonth - i) * ONE_DAY
      );
      const noTime = new Date(
        dayDate.getFullYear(),
        dayDate.getMonth(),
        dayDate.getDate()
      );
      pushDay(days, noTime);
    }

    // fill the selected month days
    for (let i = 1; i <= lastDay.getDate(); i += 1) {
      const dayDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), i);
      pushDay(days, dayDate);
    }

    // fill the next month days
    for (let i = 2; days.flat().length < CALENDAR_ROWS * 7; i += 1) {
      const dayDate = new Date(lastDay.getTime() + i * ONE_DAY);
      const noTime = new Date(
        dayDate.getFullYear(),
        dayDate.getMonth(),
        dayDate.getDate()
      );
      pushDay(days, noTime);
    }
    return days;
  }, [displayDate]);

  const monthName = useMemo(() => {
    const mnthName = displayDate.toLocaleString("es", { month: "long" });
    return mnthName.charAt(0).toUpperCase() + mnthName.slice(1);
  }, [displayDate]);

  const yearName = useMemo(() => displayDate.getFullYear(), [displayDate]);

  const nextMonth = () => {
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();
    setDisplayDate(
      new Date(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1, 1)
    );
  };

  const prevMonth = () => {
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();
    setDisplayDate(
      new Date(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1, 1)
    );
  };

  const nextYear = () => {
    setFirstSelectorYear(firstSelectorYear + 12);
  };

  const prevYear = () => {
    setFirstSelectorYear(firstSelectorYear - 12);
  };

  const nextButton = () => {
    switch (mode) {
      case "year":
        return nextYear();
      case "month":
        return false;
      case "day":
      default:
        return nextMonth();
    }
  };

  const prevButton = () => {
    switch (mode) {
      case "year":
        return prevYear();
      case "month":
        return false;
      case "day":
      default:
        return prevMonth();
    }
  };

  const rangeType = (day, pFrom, pTo) => {
    if (
      (pFrom && !pTo && sameDay(day, pFrom)) ||
      (pFrom && pTo && sameDay(day, pFrom) && sameDay(pFrom, pTo))
    ) {
      return "active";
    }
    if (!pFrom || !pTo) {
      return false;
    }
    const from = pFrom.getTime() > pTo.getTime() ? pTo : pFrom;
    const to = pFrom.getTime() > pTo.getTime() ? pFrom : pTo;
    if (sameDay(day, from)) {
      return "rangestart";
    }
    if (sameDay(day, to)) {
      return "rangeend";
    }
    if (isBetwen(day, from, to)) {
      return "rangecenter";
    }
    return false;
  };

  const getType = (day) => {
    // if user is selecting range date
    if (selectingValue) {
      const type = rangeType(day, selectingValue, hoveringValue);
      if (type) {
        return type;
      }
    } else if (range) {
      const type = rangeType(day, value?.from, value?.to);
      if (type) {
        return type;
      }
    } else if (sameDay(day, new Date(value))) {
      return "active";
    }

    if (sameDay(day, new Date())) {
      return "today";
    }

    if (day.getMonth() !== displayDate.getMonth()) {
      return "disabled";
    }

    return "default";
  };

  const renderYearSelector = () =>
    new Array(4).fill().map((_, rowIndex) => {
      const q = `${rowIndex}_${firstSelectorYear}`;
      return (
        <Row key={q} className="year" noGutters>
          {new Array(3).fill().map((__, colIndex) => {
            const year = firstSelectorYear + (rowIndex * 3 + colIndex);
            return (
              <Col key={`${year}`}>
                <Button
                  text={year}
                  mode="outline"
                  onClick={() => {
                    const newDisplayDate = new Date(
                      year,
                      displayDate.getMonth(),
                      displayDate.getDate()
                    );
                    setDisplayDate(newDisplayDate);
                    setMode("day");
                  }}
                  variant={
                    new Date().getFullYear() === year ? "primary" : "neutral"
                  }
                />
              </Col>
            );
          })}
        </Row>
      );
    });

  const renderMonthSelector = () =>
    new Array(4).fill().map((_, rowIndex) => (
      <Row className="month" noGutters>
        {new Array(3).fill().map((__, colIndex) => {
          const monthIndex = rowIndex * 3 + colIndex;
          const month = monthList[monthIndex];

          return (
            <Col>
              <Button
                text={month}
                mode="outline"
                onClick={() => {
                  const newDisplayDate = new Date(
                    displayDate.getFullYear(),
                    monthIndex,
                    displayDate.getDate()
                  );
                  setDisplayDate(newDisplayDate);
                  setMode("day");
                }}
                variant={
                  new Date().getMonth() === monthIndex ? "primary" : "neutral"
                }
              />
            </Col>
          );
        })}
      </Row>
    ));

  const selectDay = (day) => {
    if (onChange) {
      if (range) {
        if (!selectingValue) {
          setSelectingValue(day);
        } else if (!sameDay(day, selectingValue)) {
          const from =
            selectingValue.getTime() > day.getTime() ? day : selectingValue;
          const to =
            selectingValue.getTime() > day.getTime() ? selectingValue : day;
          onChange({ from, to });
          setSelectingValue(undefined);
          setHoveringValue(undefined);
        }
      } else {
        onChange(day);
      }
    }
  };

  const renderDaySelector = () => (
    <>
      <Row className="days">
        <Col>D</Col>
        <Col>L</Col>
        <Col>M</Col>
        <Col>X</Col>
        <Col>J</Col>
        <Col>V</Col>
        <Col>S</Col>
      </Row>
      {daysArray?.map((week, i) => {
        const weekNum = `week-${i}`;
        return (
          <Row key={weekNum}>
            <Col>
              {week?.map((day) => (
                <CalendarButton
                  key={`day-${day.toISOString().substr(0, 10)}`}
                  text={day.getDate()}
                  type={getType(day)}
                  onMouseEnter={() => {
                    if (selectingValue) {
                      setHoveringValue(day);
                    }
                  }}
                  onMouseLeave={() => {
                    if (selectingValue) {
                      setHoveringValue(undefined);
                    }
                  }}
                  onClick={() => selectDay(day)}
                />
              ))}
            </Col>
          </Row>
        );
      })}
    </>
  );

  const renderMode = () => {
    switch (mode) {
      case "year":
        return renderYearSelector();
      case "month":
        return renderMonthSelector();
      case "day":
      default:
        return renderDaySelector();
    }
  };

  return (
    <StyledCalendar {...props}>
      <Segment compact style={{ width: "296px" }}>
        <Row>
          <Col xs="auto">
            <Button
              mode="link"
              variant="primary"
              icon="leftArrow"
              disabled={mode === "month"}
              onClick={prevButton}
            />
          </Col>
          <Col>
            <Button
              mode="link"
              variant="primary"
              onClick={() => setMode("month")}
              text={monthName}
            />
          </Col>
          <Col>
            <Button
              mode="link"
              variant="primary"
              onClick={() => {
                setFirstSelectorYear(displayDate.getFullYear() - 4);
                setMode("year");
              }}
              text={yearName}
            />
          </Col>
          <Col xs="auto">
            <Button
              mode="link"
              variant="primary"
              icon="rightArrow"
              disabled={mode === "month"}
              onClick={nextButton}
            />
          </Col>
        </Row>
        {renderMode()}
      </Segment>
    </StyledCalendar>
  );
};

const dateProptype = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.instanceOf(Date),
]);

Calendar.propTypes = {
  value: PropTypes.oneOfType([
    dateProptype,
    PropTypes.shape({
      from: dateProptype,
      to: dateProptype,
    }),
  ]),
  range: PropTypes.bool,
  onChange: PropTypes.func,
};

Calendar.defaultProps = {
  value: undefined,
  range: false,
  onChange: undefined,
};

export default Calendar;
