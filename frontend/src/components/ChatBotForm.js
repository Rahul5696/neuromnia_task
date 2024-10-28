import React, { lazy, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCode, setMessage, setDomain, setLevel, setData, resetState } from '../redux/store';

const Select = lazy(() => import('./Select'));
const Table = lazy(() => import('./Table'));

const ChatBotForm = () => {
  const [error, setError] = useState('');
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();
  const { code, domain, message, level, domainOptions, levelOptions, data } = useSelector((state) => state.mileStoneData)

  const messageOptions = [
    { level: 'Lookup Milestone', value: 'Lookup Milestone' },
    { level: 'List Domain', value: 'List Domain' }
  ];

  const validateMessage = () => {
    const error = {};
    if (!message) error.message = 'Message Type is required!';
    if (message === "Lookup Milestone" && !code) error.code = 'Please enter a milestone!';
    if (message === "List Domain") {
      if (!domain) error.domain = 'Please select a domain!';
      if (!level) error.level = 'Please select a level!';
    }
    setErrors(error);
    return Object.keys(error).length > 0;
  };

  const sendRequest = async () => {
    if (validateMessage()) return;

    const requestBody = { message, code, domain, level };
    try {
      const res = await fetch('http://localhost:3001/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(setData(data));
        setError('');
      } else {
        dispatch(setData([]));
        setError(`Error: ${data.error}`);
      }
    } catch (err) {
      setError('An error occurred while sending the request.');
    }
  };

  const handleReset = () => {
    setErrors(null);
    dispatch(resetState());
  };

  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-5 d-flex flex-column align-items-center">
          <h1 className="text-center">Milestone Lookup Chatbot</h1>
          <div className="mb-3" style={{ maxWidth: '550px', width: '100%' }}>
            <Suspense fallback={<p>Loading...</p>}>
              <Select
                title="Message Type"
                setErrors={setErrors}
                errorType="message"
                errors={errors}
                setData={setMessage}
                options={messageOptions}
                value={message}
              />
            </Suspense>
          </div>

          {message && (
            message === 'Lookup Milestone' ? (
              <div className="mb-3" style={{ maxWidth: '550px', width: '100%' }}>
                <label className="form-label">Enter milestone code</label>
                <input
                  className="form-control"
                  type="text"
                  value={code}
                  onChange={(e) => dispatch(setCode(e.target.value))}
                  placeholder="Enter milestone code"
                />
                {errors?.code && <p className="text-danger">{errors.code}</p>}
              </div>
            ) : (
              <div className="row mb-3" style={{ width: '100%' }}>
                <div className="col-md-6">
                  <Suspense fallback={<p>Loading...</p>}>
                    <Select
                      title="Domain"
                      errors={errors}
                      setErrors={setErrors}
                      errorType="domain"
                      options={domainOptions}
                      setData={setDomain}
                      value={domain}
                    />
                  </Suspense>
                </div>
                <div className="col-md-6">
                  <Suspense fallback={<p>Loading...</p>}>
                    <Select
                      title="Level"
                      errors={errors}
                      setErrors={setErrors}
                      errorType="level"
                      options={levelOptions}
                      setData={setLevel}
                      value={level}
                    />
                  </Suspense>
                </div>
              </div>
            )
          )}

          <div className="d-flex gap-2 justify-content-center">
            <button className="btn btn-success" style={{ width: '10rem' }} onClick={sendRequest}>Send Request</button>
            <button className="btn btn-danger" style={{ width: '10rem' }} onClick={handleReset}>Reset</button>
          </div>

        </div>

        <div className="col-md-7">
          <h3 className="mt-3 text-center">Response</h3>
          <Suspense fallback={<p>Loading table...</p>}>
            {data.length > 0 ? (
              <Table />
            ) : error ? (
              <p className="text-danger text-center">{error}</p>
            ) : (
              <p className="text-center">No data found</p>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ChatBotForm;
