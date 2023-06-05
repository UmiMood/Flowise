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
                        oldValue={JSON.stringify(oldJSON, undefined, 4)}
                        newValue={JSON.stringify(newJSON, undefined, 4)}
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
