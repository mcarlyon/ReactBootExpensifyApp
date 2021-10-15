import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {

    }
    onStartDateChange = (startDate) => {
        console.log(startDate);
        this.props.dispatch(setStartDate(startDate));
    }
    onEndDateChange = (endDate) => {
        this.props.dispatch(setEndDate(endDate));
    }
    render () {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(e) => {
                        if (e.target.value == 'date') {
                            props.dispatch(sortByDate());
                        } else if (e.target.value == 'amount') {
                            props.dispatch(sortByAmount());
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <div>
                    <p>Start Date</p>
                    <DatePicker
                        selected={this.props.filters.startDate}
                        onChange={this.onStartDateChange}
                        name="createdAt"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <p>End Date</p>
                    <DatePicker
                        selected={this.props.filters.endDate}
                        onChange={this.onEndDateChange}
                        name="createdAt"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);