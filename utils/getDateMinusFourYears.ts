export function getDateMinusFourYears(): string {
    let currentDate = new Date()
    currentDate.setDate(currentDate.getDate() - 1460)

    const year = String(currentDate.getFullYear())
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const formattedDateForCalendar: string = `${year}-${month}-${day}`

    return formattedDateForCalendar;
}