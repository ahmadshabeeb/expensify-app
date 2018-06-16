import moment from 'moment';

const selectExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const statrtDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text);

        return statrtDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
        return a.createdAt < b.createdAt? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount? 1 : -1;
        } 
    });
};

export default selectExpenses;