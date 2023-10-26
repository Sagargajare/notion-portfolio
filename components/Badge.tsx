import React from "react";

type Props = {};

const Badge = (props: Props) => {
  return (
    <a href="https://github.com/Sagargajare/notion-portfolio" target="_blank" className="badge" rel="noreferrer">
      <img width={18} height={18} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAELklEQVR4Ab2XAURsaRTH/zPdqqqZahpVS9iipIioVhaRIm2BtIFkQSXJkja7lt0oYFViBQkpRFHPSpVoSTbQIlhelFKVaZpqpmpm7v7P8+a6vbkzb+qN+XHc+9373XPPd+455zvXhDDEx8crZrPZpiiK1ev12hMSEmxPT08yzvb7/VYA2SaTKcPn89k51845GXFxcdkejyeVYw/P36mq+hPH7xECE0haWto3VPgDFX3FB21UZOPD9oeHByuvx1MJPgefEz3IyMhAeno6Li4ucHp6KtdvEhMT++7v72epxx9kAG/a+eL3fKkFhKtDUlKSKEJWVhZsNpv+aHhNjhaLBdQFGg6BOrG0tISenh5cXl7K/QUuqOf5+fkKeujibwGoIo2NjerNzY1KY9RocXx8rNbV1X3QTwOP6KUGeS10aAaIdHR0qHSXGk1kQaOjoyoXK+K1Wq1/0NMpgRgQA/6GjoqKCiwsLKCgoACfQn14fHyEy+WCCD2midPpNDrXxvv7+6AxEFJSUvZ5/p2RAYEJqKmpkW8apJTfEmKIyJdA3T8rCIHb7cbGxgbCQXdCAjY5ORkS+SJ0rxxDClMZ/f39ODo6kkA1KwhDQ0ODiDxo+AJJOzFAUpD1AJGyuLiI2dlZCGENmJiYQHFxMaKNeI583gDJ67fA4oXr6+sXQVpaWgq73Y5PURAhEvnz8/OQ6ibKRRwOB9rb29HW1oYAEuXl5eU4ODhAAHnx5uamoQFaHTCSw8NDNcDU1JThHFZB9eTk5EXOr62tST35cJ+ZFFTYAvcov5gRIZ2dnTg7O0Nubi70iBd6e3u1lJS0ra+vR2VlpTYWCUXEBkj65OTkGCqTmi+F6y2Y8UZSU1Ohp6+vTzad2BnQ3d2NvLw8BDg/P5cCI58iNgZkZmZifHwceubm5rCyshIbA4TW1la0tLRAj+z/TNHYGCDld3JyElKeAzAlMTAwEBsDhPz8fIyMjEDP9PQ01tfXY2OA0NXVJVv3i55heXk5dgZIbWClfNPeYeZDbkSBsrIyDA4Ovt4A1ul/2f38h1fCzSko54eGhlBSUvI6A9iVeCV7GNE+hEFq/tjYGKQtE4aHh1FYWIidnR0EkOZkZmYG0iEFkMYlHMrH9muDqfQ79+/fEILt7W3s7e2BO5nWFUnTWl1dDT1VVVXY3d3F1tYWioqKwJY84i5FYYv1zmA7jjpNTU3adqzouhgv//s6GZT/8Pt+DeLxeGCMcasu829vb/WdUNA5F4XV1VWtkJkM2vEqGrLN4Eysra1Fc3OzKBYFYRXTAC0wI4Ue/94EAywWSxdX8meUGlAfV+qlZx9o3JWEHMdnAP7iwiZMIWq8mUH2Kyf8yJ9JC6Pbw090xevy8BXP7xRFcfDeHVtyBz3m4guc9ICTjYuLRwfHd7zuYJFy05tOzvXDgP8BRZVfSMROedsAAAAASUVORK5CYII="></img>
      <span>Made with Notion</span>
    </a>
  );
};

export default Badge;
