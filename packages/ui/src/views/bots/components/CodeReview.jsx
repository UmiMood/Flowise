import React from 'react'
import axios from 'axios'
import Select from 'react-select'
import ReactDiffViewer from 'react-diff-viewer'

const oldJSON = require('../data/old.json')
const newJSON = require('../data/new.json')

function CodeReview() {
    const newStyles = {
        variables: {
            light: {
                codeFoldGutterBackground: '#6F767E',
                codeFoldBackground: '#E2E4E5'
            }
        }
    }
    return (
        <div>
            <div className='mx-10 mt-5'>
                {/* <h1 className='flex justify-center mb-2 text-xl'>AI Code Review App</h1> */}
                <div className=' flex gap-5' style={{ display: 'flex', gap: '20px' }}>
                    <div className=' w-60 text-black' style={{ width: '200px' }}>
                        <div className=' text-red-600 text-lg mb-1'>Select Project:</div>

                        <Select
                            name='projects'
                            //     onChange={handleProjectChange} options={projects}
                        />
                    </div>

                    <div className=' w-60 text-black' style={{ width: '200px' }}>
                        <div className=' text-red-600 text-lg mb-1'>Select Branch:</div>
                        <Select
                            //    value={selectedBranch}
                            name='branches'
                            //    onChange={handleBranchChange}
                            //    options={branches}
                            className='text-black'
                        />
                    </div>

                    <div className=' w-60 text-black' style={{ width: '200px' }}>
                        <div className=' text-red-600 text-lg mb-1'>Select Commit:</div>

                        <Select
                            //     /value={selectedCommit}
                            name='commits'
                            //     onChange={handleCommitChange} options={commits}
                        />
                    </div>
                </div>

                {/* <ul>
        {commits.map((commit) => (
          <li key={commit.id} onClick={() => handleCommitSelection(commit.id)}>
            {commit.message}
          </li>
        ))}
      </ul> */}
                {/* {selectedCommit && ( */}
                <div className=' my-5'>
                    <h2 className=' text-xl'>Commit Files : 5{/* {!!commitFiles?.length > 0 ? `${commitFiles?.length} files` : ''} */}</h2>
                    {/* <CommitFiles
                            files={commitFiles}
                            fetchCommitsContent={fetchCommitsContent}
                            commitContent={commitContent}
                            setReviewCode={setReviewCode}
                            reviewCode={reviewCode}
                        /> */}
                    {/* {console.log('loading || reviewCode?.length == 0', !loading || reviewCode?.length == 0)} */}
                    <ReactDiffViewer
                        oldValue={`// Get user data
const userData = getUserData(userId);
// Transform user data
const transformedData = transformUserData(userData);
// Send data to server
const response = sendDataToServer(transformedData);
// Get response
const responseData = response.data;`}
                        newValue={`// Get user data and transform it
const responseData = transformUserData(getUserData(userId))
  // Send data to server
  .then(sendDataToServer)
  // Get response
  .then(res => res.data);
Explanation:
This piece of code needs to be optimized because it is not following the best practices of the language. The old code is not using the concept of promises which is available through JavaScript. By using promises, the code can be made smaller and faster. Furthermore, the code should be written using clean code architecture principles, SOLID principles, Open/Closed principle, Liskov Substitution principle, Interface Segregation principle, Dependency Inversion Principle, DRY principles, KISS (Keep It Simple, Stupid) principles, Separation of Concerns principles, Code Smells principles, Test Driven Development principles, Refactoring principles, Design Patterns principles.
Rewritten Code
// Get user data and transform it
const responseData = getUserData(userId)
  .then(transformUserData)
  // Send data to server
  .then(sendDataToServer)
  // Get response
  .then(res => res.data);`}
                        splitView={true}
                        styles={newStyles}
                        leftTitle='Old Code'
                        rightTitle='AI Code'
                        // renderContent={highlightSyntax}
                    />
                    <button
                        className={'w-full rounded-lg py-3 text-2xl font-bold bg-purple-600 hover:bg-orange-600'}
                        style={{
                            width: '100%',
                            padding: '10px 20px',
                            backgroundColor: 'rgb(147 0 147)',
                            color: 'white',
                            fontSize: '22px',
                            fontWeight: '700',
                            border: '2px solid white',
                            borderRadius: '5px',
                            marginTop: '10px'
                        }}
                        //    loading={loading}
                        //    onClick={handleAIReview}
                        //    disabled={loading}
                    >
                        Get the code review by AI
                    </button>
                    {/* <CodeReview onSubmit={handleReviewSubmission} /> */}
                </div>
                {/* )} */}
            </div>
        </div>
    )
}

export default CodeReview
